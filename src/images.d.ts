declare module "*.svg" {
  const value: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default value.toString();
}
declare module "*.jpg" {
  const value: string;
  export default value;
}
