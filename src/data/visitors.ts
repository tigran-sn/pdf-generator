import { IVisitor } from "../interfaces";

export const VISITORS_LIST: IVisitor[] = [
  {
    visitor_name: "Name 1",
    visitor_contact_number: "Mobile Number 1",
    visit_context: "Carpentry",
    visited_dates: "04, 05, 07 Nov",
  },
  {
    visitor_name: "Name 2",
    visitor_contact_number: null,
    visit_context: "Chimney Installation",
    visited_dates: "29 Oct | 06, 07 Nov",
  },
  {
    visitor_name: "Name 3",
    visitor_contact_number: "Mobile Number 2",
    visit_context: null,
    visited_dates: "01 Nov",
  },
  {
    visitor_name: "Name 3",
    visitor_contact_number: null,
    visit_context: null,
    visited_dates: "01 Nov",
  },
];
