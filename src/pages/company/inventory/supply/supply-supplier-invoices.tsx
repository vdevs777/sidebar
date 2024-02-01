import { PageHeader } from "@/components/page-header";
import { Layers } from "lucide-react";

export function InventorySupplySupplierInvoices() {
    return (
        <div>
            <PageHeader path="Inventário / Fornecimento /" title="Faturas de fornecedores" color="bg-green-400" icon={<Layers />}/>
        </div>
    )
}