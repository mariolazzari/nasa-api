import NotificationType from './NotificationType';

export type Notification = {
  messageType: NotificationType;
  messageID: string;
  messageURL: string;
  messageIssueTime: string;
  messageBody: string;
};

export default Notification;
