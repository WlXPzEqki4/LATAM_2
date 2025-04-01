"use client";

import { useState, useEffect } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";

interface PasswordProtectionProps {
  correctPassword: string;
  onAuthenticated: () => void;
}

export default function PasswordProtection({ 
  correctPassword, 
  onAuthenticated 
}: PasswordProtectionProps) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(true);

  // Check if already authenticated in session storage
  useEffect(() => {
    const isAuthenticated = sessionStorage.getItem("authenticated") === "true";
    if (isAuthenticated) {
      setOpen(false);
      onAuthenticated();
    }
  }, [onAuthenticated]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === correctPassword) {
      sessionStorage.setItem("authenticated", "true");
      setOpen(false);
      onAuthenticated();
    } else {
      setError(true);
      setPassword("");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="space-y-3">
          <Lock className="w-12 h-12 mx-auto text-primary" />
          <DialogTitle className="text-center">Secure Access Required</DialogTitle>
          <DialogDescription className="text-center">
            Please enter your password to access this application.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              className={error ? "border-red-500" : ""}
              autoFocus
            />
            {error && (
              <p className="text-red-500 text-sm">Incorrect password. Please try again.</p>
            )}
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
