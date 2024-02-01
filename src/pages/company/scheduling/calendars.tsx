import { PageHeader } from "@/components/page-header";
import { Calendar } from "lucide-react";

export function SchedulingCalendars() {
    return (
        <div>
            <PageHeader path="Agendamento /" title="Calendários" color="bg-green-400" icon={<Calendar />}/>
        </div>
    )
}