type EventParams = {
  action: string;
  category?: string;
  label?: string;
  value?: number;
};

// Declare fbq function type
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const useAnalytics = () => {
  const trackEvent = ({ action, category = 'Interaction', label, value }: EventParams) => {
    // Google Analytics Event
    if (window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value
      });
    }

    // Facebook Pixel Event
    if (window.fbq) {
      window.fbq('track', action, {
        content_category: category,
        content_name: label,
        value: value,
        currency: 'BRL'
      });
    }

    // Console log for development
    console.log('Event tracked:', { action, category, label, value });
  };

  const trackFormSubmission = (formData: any) => {
    // Google Analytics
    if (window.gtag) {
      window.gtag('event', 'form_submission', {
        event_category: 'Form',
        event_label: 'Prayer Subscription'
      });
    }

    // Facebook Pixel
    if (window.fbq) {
      window.fbq('track', 'Lead', {
        content_name: 'Prayer Subscription',
        content_category: 'Form'
      });
    }

    console.log('Form submission tracked:', formData);
  };

  return {
    trackEvent,
    trackFormSubmission
  };
};