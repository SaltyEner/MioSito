import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
                    {
                        "bg-primary text-primary-foreground hover:bg-primary/90 shadow":
                            variant === "primary",
                        "bg-muted text-muted-foreground hover:bg-muted/80":
                            variant === "secondary",
                        "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground":
                            variant === "outline",
                        "hover:bg-accent hover:text-accent-foreground": variant === "ghost",
                        "h-8 px-3 text-xs": size === "sm",
                        "h-10 px-4 py-2": size === "md",
                        "h-12 px-8": size === "lg",
                    },
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";
