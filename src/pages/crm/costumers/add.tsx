import { PageHeader } from "@/components/page-header";
import { User } from "lucide-react";

export function CostumersAdd() {
    return (
        <div>
            <PageHeader path="Clientes /" title="Adicionar" icon={<User />}/>
        </div>
    )
}