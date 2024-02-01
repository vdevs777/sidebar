import { PageHeader } from "@/components/page-header";
import { Mail } from "lucide-react";

export function MessagesMassSendingCreate() {
    return (
        <div>
            <PageHeader path="Mensagens / Envio em massa /" title="Criar" icon={<Mail/>}/>
        </div>
    )
}