import { PageHeader } from "@/components/page-header";
import { Mail } from "lucide-react";

export function MessagesNews() {
    return (
        <div>
            <PageHeader path="Mensagens /" title="Novidades" icon={<Mail/>}/>
        </div>
    )
}