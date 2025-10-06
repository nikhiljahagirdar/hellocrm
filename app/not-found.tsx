import { redirect } from 'next/navigation';

export default function NotFound() {
  redirect('/authentication/error/404-error');
}