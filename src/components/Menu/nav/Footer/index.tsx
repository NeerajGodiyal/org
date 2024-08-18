import Magnetic from '@/common/Magnetic';
import styles from './style.module.scss';

export default function index() {
  return (
    <div className={styles.footer}>
        <Magnetic>
            <div>
            <a>Sign in</a>
        
            </div>
        </Magnetic>

        <Magnetic>
            <div>
            <a>Sign Up</a>
        
            </div>
        </Magnetic>
        
    </div>
  )
}