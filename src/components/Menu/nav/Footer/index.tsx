import Magnetic from '@/common/Magnetic';
import styles from './style.module.scss';

export default function Index() {
  return (
    <div className={styles.footer}>
      <Magnetic>
        <div>
          <button className="px-6 py-2 my-12 text-white bg-black rounded-full hover:bg-blue-600 focus:outline-none">
            Sign In
          </button>
        </div>
      </Magnetic>

      <Magnetic>
        <div>
          <button className="px-6 py-2 my-12 text-white bg-black rounded-full hover:bg-green-600 focus:outline-none">
            Sign Up
          </button>
        </div>
      </Magnetic>
    </div>
  );
}
