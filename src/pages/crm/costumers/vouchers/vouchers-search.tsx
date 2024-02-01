import { PageHeader } from "@/components/page-header";
import { User } from "lucide-react";

export function VouchersSearch() {
    return (
        <div>
            <PageHeader path="Clientes / Vouchers /" title="Pesquisar" icon={<User />}/>
        </div>
    )
}