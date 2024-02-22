export default interface BlogCardInterface {
    id: string;
    title: string;
    topText: string;
    shortdescription: string[];
    btnname?: string;
    date?: string;
    imgmain?: string;
    desc?: {
      head: string;
      text: string[];
      imgofpara: string;
      type?: string;
    }[];
  }
  