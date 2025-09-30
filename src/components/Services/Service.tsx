import { type Service } from "../../utils/contentTypes"

interface ServiceProps {
    service: Service;
}

export default function Service({ service }: ServiceProps) {
    return (
        <li key={service.id} className="h-90 flex flex-col justify-between max-w-90">
            <service.Icon className="h-26 place-self-center" />
            <div className="text-center">
                <h3 className="tracking-6 mb-9.5 text-[1.75rem]/10.5 font-semibold text-nowrap">{service.heading}</h3>
                <p className="text-grey-900/85 tracking-6 font-rubik texr-base/9.5">{service.description}</p>
            </div>
        </li>
    )
}
