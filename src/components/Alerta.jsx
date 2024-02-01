import '../style-sheets/components/Alerta.css';

export function Alerta({message, tipo}) {
    return <div className={tipo='error' ? 'alerta error' : 'alerta correcto'}>
        <span>{message}</span>
    </div>
}