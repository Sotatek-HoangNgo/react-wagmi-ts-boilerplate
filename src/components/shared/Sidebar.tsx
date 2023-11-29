interface IComponentProps {
    className?: string;
}

export default function Sidebar({ className = "" }: IComponentProps) {
    return <section className={className}></section>;
}
