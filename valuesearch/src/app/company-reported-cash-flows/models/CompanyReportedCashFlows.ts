import { AnnualCashFlows } from "./AnnualCashFlows";
import { QuarterlyCashFlows } from "./QuarterlyCashFlows";



export interface CompanyReportedCashFlows {
    symbol: string;
    annualReports: AnnualCashFlows[];
    quarterlyReports: QuarterlyCashFlows[];
}
