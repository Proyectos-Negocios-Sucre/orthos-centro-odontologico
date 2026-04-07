"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export default function Modal({
  isOpen,
  onClose,
  children,
  title,
}: ModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 fade-in" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-4xl mx-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl slide-up max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-light-bg dark:hover:bg-gray-700 rounded-lg transition-colors z-10"
          aria-label="Close modal"
        >
          <X size={24} className="text-text-light dark:text-text-dark" />
        </button>

        {/* Content */}
        <div className="p-6 md:p-8">
          {title && (
            <h2 className="text-2xl md:text-3xl font-bold text-primary dark:text-primary mb-4">
              {title}
            </h2>
          )}
          {children}
        </div>
      </div>
    </div>
  );
}

