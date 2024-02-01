import { PageHeader } from "@/components/page-header";
import { Globe } from "lucide-react";

export function NetworkRoutersAdd() {
    return (
        <div>
            <PageHeader path="Network / Roteadores /" title="Adicionar" color="bg-green-400" icon={<Globe />}/>
        </div>
    )
}