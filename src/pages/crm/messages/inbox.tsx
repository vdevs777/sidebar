import { PageHeader } from "@/components/page-header";
import { Mail } from "lucide-react";

export function MessagesInbox() {
    return (
        <div>
            <PageHeader path="Mensagens /" title="Caixa de entrada" icon={<Mail/>}/>
        </div>
    )
}