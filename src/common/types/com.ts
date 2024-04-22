export interface ComOption {
  id: String,
  key: String;
  label: String;
  icon: String;
  propValue: String; // 组件所使用的值
  animations?: any; // 动画列表
  events?: any; // 事件列表
  style: any;
}