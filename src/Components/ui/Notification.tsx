import { NotificationProps } from './interface';

function Notification({ isVisible, text }: NotificationProps) {
  return (
    <div
      className={`fixed left-1/2 -translate-x-1/2 text-center bg-primary-200 text-sm max-w px-4 py-2 rounded-primary transition-all duration-500 lg:text-base motion-reduce:transition-none ${
        isVisible ? 'bottom-20' : '-bottom-16'
      }`}
    >
      {text}
    </div>
  );
}

export default Notification;
