import { PageHeader } from "@/components/page-header";
import { User } from "lucide-react";

export function VouchersList() {
    return (
        <div>
            <PageHeader path="Clientes / Vouchers /" title="Adicionar" icon={<User />}/>
        </div>
    )
}