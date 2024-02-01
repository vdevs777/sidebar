import { PageHeader } from "@/components/page-header";
import {  LayoutTemplate } from "lucide-react";

export function Dashboard() {
    return (
        <div>
            <PageHeader title="Painel" color="bg-zinc-700" icon={<LayoutTemplate />}/>
        </div>
    )
}