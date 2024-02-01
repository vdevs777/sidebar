import { PageHeader } from "@/components/page-header";
import { Layers } from "lucide-react";

export function InventorySupplyVendords() {
    return (
        <div>
            <PageHeader path="Inventário / Fornecimento /" title="Vendedores" color="bg-green-400" icon={<Layers />}/>
        </div>
    )
}