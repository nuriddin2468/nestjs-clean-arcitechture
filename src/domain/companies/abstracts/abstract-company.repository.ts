import { CompanyEntity } from '@domain/companies/entities/company.entity';

abstract class AbstractCompanyRepository {
  abstract createCompany(
    company: Omit<CompanyEntity, 'id'>,
  ): Promise<CompanyEntity>;
  abstract fetchCompanies(): Promise<CompanyEntity[]>;
  abstract findCompany(companyId: string): Promise<CompanyEntity>;
  abstract deleteCompany(companyId: number): Promise<CompanyEntity>;
}
