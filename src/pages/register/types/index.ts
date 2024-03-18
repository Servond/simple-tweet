export interface FormValues {
  name: string;
  email: string;
  password: string;
}

export interface FormProps {
  initialName?: string;
  initialEmail?: string;
  initialPassword?: string;
}
