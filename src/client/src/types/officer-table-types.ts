export interface Officer {
  officer_id: number;
  name: string;
  army_identity_number: number;
  email: string;
  phone_number: string;
}

export interface OfficerTableProps {
    officers: Officer[];
  }