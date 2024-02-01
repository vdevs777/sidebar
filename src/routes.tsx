import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";
import { Layout } from "./pages/_layouts/layout";
import { CostumersAdd } from "./pages/crm/costumers/add";
import { CostumersList } from "./pages/crm/costumers/list";
import { CostumersMaps } from "./pages/crm/costumers/maps";
import { CostumersSearch } from "./pages/crm/costumers/search";
import { VouchersGenerate } from "./pages/crm/costumers/vouchers/vouchers-generate";
import { VouchersList } from "./pages/crm/costumers/vouchers/vouchers-list";
import { VouchersPrepaidSeries } from "./pages/crm/costumers/vouchers/vouchers-prepaid-series";
import { LeadsDashboard } from "./pages/crm/leads/dashboard";
import { LeadsAddLead } from "./pages/crm/leads/add-lead";
import { LeadsList } from "./pages/crm/leads/list";
import { LeadsQuotes } from "./pages/crm/leads/quotes";
import { LeadsMaps } from "./pages/crm/leads/map";
import { VouchersSearch } from "./pages/crm/costumers/vouchers/vouchers-search";
import { TicketsDashboard } from "./pages/crm/tickets/dashboard";
import { TicketsList } from "./pages/crm/tickets/list";
import { TicketsClosed } from "./pages/crm/tickets/closed";
import { TicketsArchive } from "./pages/crm/tickets/archive";
import { TicketsRecipients } from "./pages/crm/tickets/recipients";
import { FinanceDashboard } from "./pages/crm/finance/dashboard";
import { FinanceTransactions } from "./pages/crm/finance/transactions";
import { FinanceInvoices } from "./pages/crm/finance/invoices";
import { FinanceCreditNotes } from "./pages/crm/finance/credit-notes";
import { FinanceProformaInvoices } from "./pages/crm/finance/proforma-invoices";
import { FinancePayments } from "./pages/crm/finance/payments";
import { FinanceHistoryAndPreview } from "./pages/crm/finance/history-and-preview";
import { FinanceCosts } from "./pages/crm/finance/costs";
import { FinancePaymentStatementsProcessing } from "./pages/crm/finance/payment-statements/payment-statements-processing";
import { FinancePaymentStatementsHistory } from "./pages/crm/finance/payment-statements/payment-statements-history";
import { FinanceRefillCardsGenerate } from "./pages/crm/finance/refill-cards/refill-cards-generate";
import { FinanceRefillCardsSeries } from "./pages/crm/finance/refill-cards/refill-cards-series";
import { MessagesInbox } from "./pages/crm/messages/inbox";
import { MessagesNews } from "./pages/crm/messages/news";
import { MessagesMassSendingCreate } from "./pages/crm/messages/mass-sending/mass-sending-create";
import { MessagesMassSendingHistory } from "./pages/crm/messages/mass-sending/mass-sending-history";
import { NetworkMaps } from "./pages/company/networking/maps";
import { NetworkTR069Dashboard } from "./pages/company/networking/TR-069-(ACS)/tr-069-dashboard";
import { NetworkTR069Devices } from "./pages/company/networking/TR-069-(ACS)/tr-069-devices";
import { NetworkTR069Files } from "./pages/company/networking/TR-069-(ACS)/tr-069-files";
import { NetworkTR069UpgradeBatches } from "./pages/company/networking/TR-069-(ACS)/tr-069-upgrade-batches";
import { NetworkRoutersAdd } from "./pages/company/networking/routers/routers-add";
import { NetworkRoutersList } from "./pages/company/networking/routers/routers-list";
import { NetworkIPv4List } from "./pages/company/networking/ipv4/ipv4-list";
import { NetworkIPv4Add } from "./pages/company/networking/ipv4/ipv4-add";
import { NetworkIPv6List } from "./pages/company/networking/ipv6/ipv6-list";
import { NetworkIPv6Add } from "./pages/company/networking/ipv6/ipv6-add";
import { NetworkHardwareList } from "./pages/company/networking/hardware/hardware-list";
import { NetworkHardwareAdd } from "./pages/company/networking/hardware/hardware-add";
import { NetworkHardwareBackup } from "./pages/company/networking/hardware/hardware-backup";
import { SchedulingDashboard } from "./pages/company/scheduling/dashboard";
import { SchedulingProjects } from "./pages/company/scheduling/projects";
import { SchedulingTasks } from "./pages/company/scheduling/tasks";
import { SchedulingCalendars } from "./pages/company/scheduling/calendars";
import { SchedulingMaps } from "./pages/company/scheduling/maps";
import { SchedulingArchive } from "./pages/company/scheduling/archive";
import { InventoryDashboard } from "./pages/company/inventory/dashboard";
import { InventoryItems } from "./pages/company/inventory/items";
import { InventoryProducts } from "./pages/company/inventory/products";
import { InventorySupplySupplierInvoices } from "./pages/company/inventory/supply/supply-supplier-invoices";
import { InventorySupplySuppliers } from "./pages/company/inventory/supply/supply-suppliers";
import { InventorySupplyVendords } from "./pages/company/inventory/supply/supply-vendors";
import { InventoryReportsItems } from "./pages/company/inventory/reports/reports-items";
import { InventoryReportsSoldAndRentedItems } from "./pages/company/inventory/reports/reports-sold-and-rented-items";
import { VoiceProcessingCDRImport } from "./pages/company/voice/processing/voice-cdr-import";
import { VoiceProcessingCDRExport } from "./pages/company/voice/processing/voice-cdr-export";
import { VoiceProcessingCDRHistory } from "./pages/company/voice/processing/voice-cdr-history";
import { VoiceProcessingCDRErrors } from "./pages/company/voice/processing/voice-cdr-errors";
import { VoiceRateTablesCustomers } from "./pages/company/voice/rate-tables/rate-tables-customers";
import { VoiceRateTablesProviders } from "./pages/company/voice/rate-tables/rate-tables-providers";
import { VoiceCategories } from "./pages/company/voice/categories";
import { VoicePrefixes } from "./pages/company/voice/prefixes";
import { TariffPlansInternet } from "./pages/company/tariff-plans/internet";
import { TariffPlansVoice } from "./pages/company/tariff-plans/voice";
import { TariffPlansRecurring } from "./pages/company/tariff-plans/recurring";
import { TariffPlansOneTime } from "./pages/company/tariff-plans/one-time";
import { TariffPlansBundles } from "./pages/company/tariff-plans/bundles";
import { Admin } from "./pages/admin";
import { Config } from "./pages/config";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/', element: <Dashboard /> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/crm/costumers/add', element: <CostumersAdd /> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/crm/costumers/list', element: <CostumersList /> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/crm/costumers/maps', element: <CostumersMaps /> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/crm/costumers/search', element: <CostumersSearch /> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/crm/costumers/vouchers/generate', element: <VouchersGenerate /> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/crm/costumers/vouchers/list', element: <VouchersList /> }]
    }, 
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/crm/costumers/vouchers/prepaid-series', element: <VouchersPrepaidSeries /> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/crm/costumers/vouchers/search', element: <VouchersSearch /> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/crm/leads/dashboard', element: <LeadsDashboard /> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/crm/leads/add-lead', element: <LeadsAddLead /> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/crm/leads/list', element: <LeadsList /> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/crm/leads/quotes', element: <LeadsQuotes /> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/crm/leads/maps', element: <LeadsMaps /> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/crm/tickets/dashboard', element: <TicketsDashboard /> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/crm/tickets/list', element: <TicketsList /> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/crm/tickets/closed-tickets', element: <TicketsClosed /> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/crm/tickets/archives', element: <TicketsArchive/> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/crm/tickets/recipients', element: <TicketsRecipients /> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/crm/finance/dashboard', element: <FinanceDashboard /> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/crm/finance/transactions', element: <FinanceTransactions /> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/crm/finance/invoices', element: <FinanceInvoices/> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/crm/finance/credit-notes', element: <FinanceCreditNotes/> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/crm/finance/proforma-invoices', element: <FinanceProformaInvoices /> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/crm/finance/payments', element: <FinancePayments/> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/crm/finance/history-and-preview', element: <FinanceHistoryAndPreview /> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/crm/finance/costs', element: <FinanceCosts /> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/crm/finance/payment-statements/processing', element: <FinancePaymentStatementsProcessing /> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/crm/finance/payment-statements/history', element: <FinancePaymentStatementsHistory /> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/crm/finance/refill-cards/generate', element: <FinanceRefillCardsGenerate /> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/crm/finance/refill-cards/series', element: <FinanceRefillCardsSeries/> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/crm/messages/inbox', element: <MessagesInbox /> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/crm/messages/news', element: <MessagesNews /> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/crm/messages/mass-sending/create', element: <MessagesMassSendingCreate/> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/crm/messages/mass-sending/history', element: <MessagesMassSendingHistory/> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/company/network/maps', element: <NetworkMaps /> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/company/network/TR-069/dashboard', element: <NetworkTR069Dashboard/> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/company/network/TR-069/devices', element: <NetworkTR069Devices/> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/company/network/TR-069/files', element: <NetworkTR069Files/> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/company/network/TR-069/upgrade-batches', element: <NetworkTR069UpgradeBatches/> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/company/network/routers/add', element: <NetworkRoutersAdd/> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/company/network/routers/list', element: <NetworkRoutersList/> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/company/network/ipv4/list', element: <NetworkIPv4List/> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/company/network/ipv4/add', element: <NetworkIPv4Add/> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/company/network/ipv6/list', element: <NetworkIPv6List/> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/company/network/ipv6/add', element: <NetworkIPv6Add/> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/company/network/hardware/list', element: <NetworkHardwareList /> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/company/network/hardware/add', element: <NetworkHardwareAdd /> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/company/network/hardware/backups', element: <NetworkHardwareBackup /> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/company/scheduling/dashboard', element: <SchedulingDashboard /> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/company/scheduling/projects', element: <SchedulingProjects/> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/company/scheduling/tasks', element: <SchedulingTasks /> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/company/scheduling/calendars', element: <SchedulingCalendars/> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/company/scheduling/maps', element: <SchedulingMaps /> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/company/scheduling/archive', element: <SchedulingArchive /> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/company/inventory/dashboard', element: <InventoryDashboard /> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/company/inventory/items', element: <InventoryItems /> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/company/inventory/products', element: <InventoryProducts /> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/company/inventory/supply/supplier-invoices', element: <InventorySupplySupplierInvoices /> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/company/inventory/supply/suppliers', element: <InventorySupplySuppliers/> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/company/inventory/supply/vendors', element: <InventorySupplyVendords /> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/company/inventory/reports/items', element: <InventoryReportsItems /> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/company/inventory/reports/sold-and-rented-items', element: <InventoryReportsSoldAndRentedItems /> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/company/voice/processing/cdr-import', element: <VoiceProcessingCDRImport /> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/company/voice/processing/cdr-export', element: <VoiceProcessingCDRExport /> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/company/voice/processing/cdr-history', element: <VoiceProcessingCDRHistory /> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/company/voice/processing/cdr-errors', element: <VoiceProcessingCDRErrors /> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/company/voice/rate-tables/customers', element: <VoiceRateTablesCustomers /> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/company/voice/rate-tables/providers', element: <VoiceRateTablesProviders/>  }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/company/voice/categories', element: <VoiceCategories />  }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/company/voice/prefixes', element: <VoicePrefixes />  }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/company/tariff-plans/internet', element: <TariffPlansInternet /> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/company/tariff-plans/voice', element: <TariffPlansVoice /> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/company/tariff-plans/recurring', element: <TariffPlansRecurring/> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/company/tariff-plans/one-time', element: <TariffPlansOneTime /> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/company/tariff-plans/bundles', element: <TariffPlansBundles /> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/administration', element: <Admin /> }]
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/config', element: <Config /> }]
    },
])