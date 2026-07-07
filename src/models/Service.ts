import type { Service as IService } from "@/types";

export class ServiceModel implements IService {
  title: string;
  desc: string;
  subItems?: string[];

  constructor(service: IService) {
    this.title = service.title;
    this.desc = service.desc;
    this.subItems = service.subItems;
  }
}
