import { PageHeader } from "@/components/page-header";
import { User } from "lucide-react";

export function CostumersSearch() {
    return (
        <div>
            <PageHeader path="Clientes /" title="Pesquisar" icon={<User />}/>
        </div>
    )
}