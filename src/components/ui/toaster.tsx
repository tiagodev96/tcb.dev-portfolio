"use client";

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} className="bg-1000">
            <div className="grid gap-1">
              {title && <ToastTitle className="text-100">{title}</ToastTitle>}
              {description && (
                <ToastDescription className="text-100">
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose className="bg-100" />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
