'use client';

import { useState, useCallback, useMemo, useEffect } from 'react';
import { OrderFormData, Package } from '@/types';
import { generateOrderId, createEmptyPackage } from '@/utils';
import OrderForm from '@/components/OrderForm/OrderForm';
import LivePreview from '@/components/LivePreview/LivePreview';
import AppHeader from '@/components/ui/AppHeader/AppHeader';
import styles from './page.module.css';

// Stable SSR-safe initial state — no random values, no Date()
// Both server and client will render identical HTML on first pass.
const SSR_INITIAL: OrderFormData = {
  orderId: '',
  shipmentDate: '',
  deliveryType: 'standard',
  consignor: { name: '', address: '', city: '', pincode: '' },
  consignee: { name: '', address: '', city: '', pincode: '' },
  packages: [{ id: 'pkg_initial', label: '', weight: '', length: '', width: '', height: '', declaredValue: '' }],
  fragile: false,
  insurance: false,
};

const buildFreshOrder = (): OrderFormData => ({
  orderId: generateOrderId(),
  shipmentDate: new Date().toISOString().split('T')[0],
  deliveryType: 'standard',
  consignor: { name: '', address: '', city: '', pincode: '' },
  consignee: { name: '', address: '', city: '', pincode: '' },
  packages: [createEmptyPackage()],
  fragile: false,
  insurance: false,
});

export default function HomePage() {
  const [formData, setFormData] = useState<OrderFormData>(SSR_INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Runs only on the client after hydration — safe to use Math.random() + Date here.
  useEffect(() => {
    setFormData(buildFreshOrder());
    setHydrated(true);
  }, []);

  const handleFieldChange = useCallback(
    <K extends keyof OrderFormData>(field: K, value: OrderFormData[K]) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
    },
    []
  );

  const handleAddressChange = useCallback(
    (party: 'consignor' | 'consignee', field: string, value: string) => {
      setFormData((prev) => ({
        ...prev,
        [party]: { ...prev[party], [field]: value },
      }));
    },
    []
  );

  const handlePackageChange = useCallback((id: string, field: keyof Package, value: string) => {
    setFormData((prev) => ({
      ...prev,
      packages: prev.packages.map((pkg) =>
        pkg.id === id ? { ...pkg, [field]: value } : pkg
      ),
    }));
  }, []);

  const handleAddPackage = useCallback(() => {
    setFormData((prev) => ({
      ...prev,
      packages: [...prev.packages, createEmptyPackage()],
    }));
  }, []);

  const handleRemovePackage = useCallback((id: string) => {
    setFormData((prev) => {
      if (prev.packages.length <= 1) return prev;
      return { ...prev, packages: prev.packages.filter((p) => p.id !== id) };
    });
  }, []);

  const handleSubmit = useCallback(() => {
    setSubmitted(true);
  }, []);

  const handleReset = useCallback(() => {
    setFormData(buildFreshOrder());
    setSubmitted(false);
  }, []);

  const previewData = useMemo(() => formData, [formData]);

  // Prevent a flash of blank/mismatched content during SSR->client handoff.
  if (!hydrated) {
    return (
      <div className={styles.page}>
        <div className={styles.loadingShell} aria-hidden="true" />
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <AppHeader orderId={formData.orderId} />
      <main className={styles.workspace}>
        <div className={styles.formPanel}>
          <OrderForm
            data={formData}
            onFieldChange={handleFieldChange}
            onAddressChange={handleAddressChange}
            onPackageChange={handlePackageChange}
            onAddPackage={handleAddPackage}
            onRemovePackage={handleRemovePackage}
            onSubmit={handleSubmit}
            onReset={handleReset}
            submitted={submitted}
          />
        </div>
        <div className={styles.previewPanel}>
          <LivePreview data={previewData} />
        </div>
      </main>
    </div>
  );
}
