import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    glass?: boolean;
}

export function Card({ className, glass, children, ...props }: CardProps) {
    return (
        <div
            className={cn(
                "rounded-xl border border-border bg-card text-card-foreground shadow-sm",
                glass && "glass bg-card/50",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
