import { PageHeader } from "@/components/page-header";
import { Layers } from "lucide-react";

export function InventoryReportsItems() {
    return (
        <div>
            <PageHeader path="Inventário / Relatórios /" title="Itens" color="bg-green-400" icon={<Layers />}/>
        </div>
    )
}