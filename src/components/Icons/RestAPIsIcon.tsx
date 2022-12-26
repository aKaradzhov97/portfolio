import { SVGProps } from 'react';
import { colors } from '@styles';

type Props = SVGProps<SVGSVGElement>;
const RestAPIsIcon = (props: Props) => (
  <svg viewBox="0 0 511 511" {...props}>
    <path fill={colors.white} d="m492.168 309.579-17.626-10.177c2.96-14.723 4.458-29.466 4.458-43.902 0-14.646-1.474-29.403-4.384-43.946l17.552-10.134c5.436-3.138 9.325-8.206 10.949-14.269s.791-12.396-2.348-17.832l-48-83.139A23.345 23.345 0 0 0 438.5 75.231a23.349 23.349 0 0 0-17.833 2.348l-17.566 10.142C380.912 68.2 354.798 53.092 327 43.692V23.5C327 10.542 316.458 0 303.5 0h-96C194.542 0 184 10.542 184 23.5v20.193c-27.65 9.362-53.728 24.49-75.999 44.088L90.332 77.579a23.345 23.345 0 0 0-17.833-2.348A23.349 23.349 0 0 0 58.23 86.18l-48 83.139c-3.139 5.436-3.972 11.769-2.348 17.832s5.513 11.131 10.949 14.269l17.626 10.177C33.499 226.32 32 241.063 32 255.5c0 14.644 1.474 29.401 4.384 43.945l-17.552 10.134c-11.222 6.479-15.08 20.879-8.602 32.102l48 83.139c6.479 11.221 20.879 15.08 32.102 8.601l17.565-10.142c22.19 19.521 48.303 34.629 76.103 44.03V487.5c0 12.958 10.542 23.5 23.5 23.5h96c12.958 0 23.5-10.542 23.5-23.5v-20.193c27.651-9.362 53.729-24.49 76-44.087l17.668 10.201c11.221 6.479 25.623 2.62 32.102-8.601l48-83.139c6.478-11.223 2.62-25.623-8.602-32.102zm-4.389 24.602-48 83.138c-2.343 4.06-7.552 5.455-11.611 3.111l-22.392-12.928a7.5 7.5 0 0 0-8.842.989c-22.893 21.173-50.437 37.148-79.653 46.199a7.5 7.5 0 0 0-5.281 7.164V487.5c0 4.687-3.813 8.5-8.5 8.5h-96c-4.687 0-8.5-3.813-8.5-8.5v-25.645a7.501 7.501 0 0 0-5.28-7.164c-29.396-9.107-56.974-25.062-79.755-46.139a7.494 7.494 0 0 0-8.843-.99l-22.29 12.868c-4.06 2.343-9.268.948-11.611-3.111l-48-83.138c-2.343-4.059-.947-9.268 3.111-11.612l22.272-12.859a7.499 7.499 0 0 0 3.566-8.146C48.739 286.357 47 270.858 47 255.5c0-15.1 1.765-30.584 5.247-46.022a7.5 7.5 0 0 0-3.566-8.145L26.332 188.43a8.445 8.445 0 0 1-3.96-5.161 8.448 8.448 0 0 1 .849-6.45l48-83.139a8.44 8.44 0 0 1 5.162-3.96 8.444 8.444 0 0 1 6.45.849l22.392 12.928a7.498 7.498 0 0 0 8.842-.989c22.894-21.173 50.437-37.148 79.653-46.199a7.5 7.5 0 0 0 5.281-7.164V23.5c0-4.687 3.813-8.5 8.5-8.5h96c4.687 0 8.5 3.813 8.5 8.5v25.645a7.501 7.501 0 0 0 5.28 7.164c29.395 9.106 56.973 25.061 79.755 46.139a7.5 7.5 0 0 0 8.843.99l22.29-12.869a8.445 8.445 0 0 1 6.45-.849 8.45 8.45 0 0 1 5.162 3.96l48 83.139a8.444 8.444 0 0 1 .849 6.45 8.445 8.445 0 0 1-3.96 5.161l-22.272 12.859a7.5 7.5 0 0 0-3.566 8.146c3.431 15.206 5.17 30.704 5.17 46.065 0 15.1-1.765 30.584-5.247 46.021a7.501 7.501 0 0 0 3.566 8.145l22.349 12.903c4.057 2.344 5.453 7.553 3.109 11.612z" />
    <path fill={colors.white} d="M255.5 104C171.962 104 104 171.963 104 255.5S171.962 407 255.5 407 407 339.037 407 255.5 339.038 104 255.5 104zm0 288C180.234 392 119 330.766 119 255.5S180.234 119 255.5 119 392 180.234 392 255.5 330.766 392 255.5 392z" />
    <path fill={colors.white} d="M283.5 216h-28a7.5 7.5 0 0 0-7.5 7.5v64a7.5 7.5 0 0 0 15 0V271h20.5c15.164 0 27.5-12.336 27.5-27.5S298.664 216 283.5 216zm0 40H263v-25h20.5c6.893 0 12.5 5.607 12.5 12.5s-5.607 12.5-12.5 12.5zM214.522 220.867A7.5 7.5 0 0 0 207.5 216h-8a7.498 7.498 0 0 0-7.022 4.867l-24 64a7.5 7.5 0 0 0 14.045 5.267L186.697 279h33.605l4.175 11.133a7.503 7.503 0 0 0 7.023 4.869 7.5 7.5 0 0 0 7.021-10.135l-23.999-64zM192.322 264l11.178-29.807L214.678 264h-22.356zM327.5 216a7.5 7.5 0 0 0-7.5 7.5v64a7.5 7.5 0 0 0 15 0v-64a7.5 7.5 0 0 0-7.5-7.5zM309.152 87.3a175.962 175.962 0 0 1 15.421 5.726 7.473 7.473 0 0 0 2.934.601 7.5 7.5 0 0 0 2.941-14.402 191.008 191.008 0 0 0-16.742-6.216 7.5 7.5 0 0 0-4.554 14.291zM100.45 339.904a7.5 7.5 0 0 0-13.168 7.184 192.173 192.173 0 0 0 10.239 16.677 7.492 7.492 0 0 0 6.189 3.255 7.5 7.5 0 0 0 6.176-11.746 177.217 177.217 0 0 1-9.436-15.37zM240.14 431.341c-40.189-3.463-78.337-20.879-107.416-49.041a7.5 7.5 0 1 0-10.435 10.775c31.55 30.555 72.947 49.452 116.563 53.21a7.501 7.501 0 0 0 8.116-6.828 7.501 7.501 0 0 0-6.828-8.116zM363.425 97.287a7.5 7.5 0 0 0-8.464 12.384c34.844 23.813 60.049 59.248 70.972 99.776a7.503 7.503 0 0 0 7.237 5.55 7.5 7.5 0 0 0 7.246-9.453c-11.852-43.98-39.195-82.426-76.991-108.257z" />
  </svg>
);

export default RestAPIsIcon;
