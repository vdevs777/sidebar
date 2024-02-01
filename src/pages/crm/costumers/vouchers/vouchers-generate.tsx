import { PageHeader } from "@/components/page-header";
import { User } from "lucide-react";

export function VouchersGenerate() {
    return (
        <div>
            <PageHeader path="Clientes / Vouchers /" title="Gerar" icon={<User />}/>
        </div>
    )
}