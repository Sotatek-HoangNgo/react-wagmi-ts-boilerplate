interface IComponentProps {
    className?: string;
}

export default function Header({ className = "" }: IComponentProps) {
    return <header className={className}></header>;
}
