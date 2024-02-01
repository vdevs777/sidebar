import { PageHeader } from "@/components/page-header";
import {  SlidersHorizontal } from "lucide-react";

export function Config() {
    return (
        <div>
            <PageHeader title="Configurações" color="bg-zinc-700" icon={<SlidersHorizontal />}/>
        </div>
    )
}