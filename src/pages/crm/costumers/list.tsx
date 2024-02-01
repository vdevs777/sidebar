import { PageHeader } from "@/components/page-header";
import { User } from "lucide-react";

export function CostumersList() {
    return (
        <div>
            <PageHeader path="Clientes /" title="Lista" icon={<User />}/>
        </div>
    )
}