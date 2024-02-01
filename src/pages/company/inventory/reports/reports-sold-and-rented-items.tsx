import { PageHeader } from "@/components/page-header";
import { Layers } from "lucide-react";

export function InventoryReportsSoldAndRentedItems() {
    return (
        <div>
            <PageHeader path="Inventário / Fornecimento /" title="Itens vendidos e alugados" color="bg-green-400" icon={<Layers />}/>
        </div>
    )
}