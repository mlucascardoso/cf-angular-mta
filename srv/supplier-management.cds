using { supplierManagement } from '../db/cds/supplier-management';

service SupplierManagementService {
    entity Emails as projection on supplierManagement.Emails;
}