import en from "@/registry/registry-messages/en.json";

type Messages = typeof en;

declare global {
  interface IntlMessages extends Messages {}
}
