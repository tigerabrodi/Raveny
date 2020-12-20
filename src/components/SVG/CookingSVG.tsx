type CookingSVGProps = {
  height: string
  width: string
}

export const CookingSVG = ({
  height = '40',
  width = '40',
}: CookingSVGProps) => (
  <svg
    height={height}
    viewBox="0 -14 512 512"
    width={width}
    role="img"
    aria-labelledby="title  desc"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title id="title">Chef</title>
    <desc id="desc">cooking while holding a spade</desc>
    <g fillRule="evenodd">
      <path
        d="m431.988281 339.78125c-7.019531-29.851562-30.390625-43.847656-59.710937-49.011719-6.738282-1.1875-13.757813-1.921875-20.972656-2.257812-5.328126-.167969-9.753907-1.269531-13.503907-3.050781-21.0625 39.929687-117.335937 37.109374-133.40625 0v-.28125c-3.890625 1.949218-8.515625 3.160156-14.097656 3.332031-7.019531.339843-13.839844 1.015625-20.382813 2.144531-28.5 4.882812-51.449218 18.03125-59.457031 45.824219 12.378907 11.882812 112.855469 102.488281 113.644531 107.457031h210.960938v-50.792969c0-5.417969 2.453125-10.300781 6.316406-13.574219zm0 0"
        fill="#64b0d9"
      />
      <path
        d="m190.296875 288.511719c-7.019531.335937-13.839844 1.015625-20.382813 2.144531v45.824219l15.308594 13.742187 19.171875-13.742187v-51.300781c-3.890625 1.949218-8.515625 3.160156-14.097656 3.332031zm0 0"
        fill="#e6e6e6"
      />
      <path
        d="m168.449219 431.433594h41.046875c7.359375 0 13.503906 5.445312 14.605468 12.503906h175.550782l-13.445313-77.855469c-1.269531-7.5625-6.261719-13.96875-13.929687-13.96875v-61.34375c-6.738282-1.1875-13.757813-1.921875-20.972656-2.257812-5.328126-.167969-9.753907-1.269531-13.503907-3.050781v66.652343h-105.410156c.222656 1.695313-51.648437 74.269531-63.941406 79.320313zm0 0"
        fill="#e6e6e6"
      />
      <path
        d="m321.308594 267.683594-48.011719-15.152344-52.859375 14.871094-.140625.253906c-3.527344 7.480469-8.515625 13.800781-15.902344 17.523438v.28125c16.070313 37.109374 112.347657 39.929687 133.40625 0-7.726562-3.667969-12.632812-10.269532-16.492187-17.777344zm0 0"
        fill="#fcc368"
      />
      <path
        d="m328.523438 123.152344c-38.226563-5.671875-76.683594-5.785156-115.363282 0-11.164062 1.664062-22.324218 3.835937-33.519531 6.488281v73.566406c0 26.042969 18.972656 49.042969 40.796875 64.195313 17.816406 12.414062 37.550781 19.554687 50.265625 18.878906 16.070313-.90625 34.507813-7.621094 50.605469-18.597656 22.890625-15.632813 41.046875-39.898438 41.046875-68.402344v-69.667969c-11.25-2.625-22.527344-4.796875-33.832031-6.460937zm0 0"
        fill="#ffdda6"
      />
      <path
        d="m273.378906 7.570312c-17.617187.054688-36.167968 9.085938-45.386718 27.058594h-24.753907c-35.777343 0-57.089843 39.339844-23.597656 60.191406v54.714844c11.191406-2.652344 22.355469-4.796875 33.519531-6.492187 38.679688-5.78125 77.136719-5.671875 115.363282 0 11.304687 1.695312 22.582031 3.839843 33.832031 6.492187v-54.714844c33.492187-20.851562 13.109375-60.191406-22.667969-60.191406h-26.613281c-5.214844-17.972656-21.761719-27.003906-39.355469-27.058594zm0 0"
        fill="#e6e6e6"
      />
      <path
        d="m362.355469 94.820312c33.492187-20.851562 13.109375-60.1875-22.667969-60.1875h-20.886719c32.082031 0 51.898438 28.695313 31.433594 50.285157-6.570313 6.910156-8.65625 3.328125-8.65625 13.007812l-.085937 47.265625c6.964843 1.269532 13.929687 2.707032 20.863281 4.34375zm0 0"
        fill="#c2c7cc"
      />
      <path
        d="m362.355469 186.136719c-1.183594-.226563-11.785157-2.257813-20.863281-9.484375v18.289062c0 28.5-18.183594 52.792969-41.074219 68.398438-16.097657 11.007812-34.535157 17.695312-50.605469 18.597656-.566406.027344-1.128906.054688-1.71875.054688 8.511719 3.078124 16.40625 4.628906 22.609375 4.289062 16.066406-.902344 34.507813-7.617188 50.605469-18.59375 22.890625-15.632812 41.046875-39.902344 41.046875-68.402344zm0 0"
        fill="#fcc368"
      />
      <path
        d="m337.800781 285.460938c-7.726562-3.667969-12.632812-10.269532-16.492187-17.773438-9.472656 6.460938-19.792969 11.457031-29.914063 14.644531 4.652344 9 8.488281 13.121094 21.933594 19.496094 1.605469.765625 3.355469 1.414063 5.214844 1.894531 8.460937-4.546875 15.226562-10.640625 19.257812-18.261718zm0 0"
        fill="#eda93b"
      />
      <path
        d="m431.988281 339.78125c-7.019531-29.851562-30.390625-43.847656-59.710937-49.011719-6.738282-1.1875-13.757813-1.921875-20.972656-2.257812-5.328126-.167969-9.753907-1.269531-13.503907-3.050781-4.03125 7.621093-10.800781 13.714843-19.257812 18.257812 2.511719.679688 5.246093 1.074219 8.289062 1.15625 3.722657.199219 7.359375.453125 10.96875.847656 3.410157.367188 6.734375.820313 10.007813 1.414063 8.765625 1.550781 17.027344 3.890625 24.46875 7.195312 17.394531 7.785157 30.335937 20.910157 35.269531 41.847657 7.101563 30.164062 9.808594 56.800781 9.808594 87.757812h17.707031v-50.792969c0-5.417969 2.453125-10.300781 6.316406-13.574219zm0 0"
        fill="#4a83c9"
      />
      <path
        d="m372.277344 290.769531c-6.738282-1.1875-13.757813-1.921875-20.972656-2.257812-5.328126-.167969-9.753907-1.269531-13.503907-3.050781v20.261718c3.410157.367188 6.734375.820313 10.007813 1.414063 8.765625 1.550781 17.027344 3.890625 24.46875 7.195312zm0 0"
        fill="#c2c7cc"
      />
      <path
        d="m498.214844 406.96875c0-17.382812-14.210938-31.601562-31.578125-31.601562h-13.8125c-4.34375 0-8.34375 1.578124-11.445313 4.203124-3.863281 3.273438-6.316406 8.15625-6.316406 13.574219v57.140625c0 9.792969 8.007812 17.808594 17.761719 17.808594h13.8125c17.367187 0 31.578125-14.222656 31.578125-31.605469zm0 0"
        fill="#ffdda6"
      />
      <path
        d="m482.679688 145.050781h-32.082032c-11.984375 0-21.765625 9.816407-21.765625 21.78125v65.804688c0 11.992187 9.78125 21.785156 21.765625 21.785156h32.082032c6.734374 0 12.769531-3.105469 16.773437-7.957031 3.101563-3.78125 4.988281-8.578125 4.988281-13.828125v-65.804688c0-5.21875-1.886718-10.046875-4.988281-13.800781-4.003906-4.851562-10.035156-7.980469-16.773437-7.980469zm0 0"
        fill="#e6e6e6"
      />
      <path
        d="m386.203125 366.082031c-1.265625-7.5625-6.257813-13.96875-13.925781-13.96875h-20.074219l16.4375 91.824219h31.011719zm0 0"
        fill="#c2c7cc"
      />
      <path
        d="m498.214844 406.96875c0-17.382812-14.210938-31.601562-31.578125-31.601562h-13.8125c-1.832031 0-3.609375.28125-5.300781.816406 13.957031 3.246094 24.445312 15.859375 24.445312 30.785156v29.515625c0 14.929687-10.488281 27.515625-24.445312 30.789063 1.691406.507812 3.46875.816406 5.300781.816406h13.8125c17.367187 0 31.578125-14.222656 31.578125-31.605469zm0 0"
        fill="#fcc368"
      />
      <path
        d="m288.070312 352.113281c-1.15625-8.777343-8.742187-15.632812-17.847656-15.632812h-30.277344c-10.628906 0-12.433593 10.015625-14.714843 20.316406-1.15625 5.136719 22.042969 10.921875 20.210937 15.71875h24.78125c9.925782 0 18.015625-8.097656 18.015625-18.003906 0-.816407-.058593-1.609375-.167969-2.398438zm0 0"
        fill="#fcc368"
      />
      <path
        d="m55.820312 336.480469h-30.277343c-9.894531 0-17.988281 8.128906-17.988281 18.03125 0 9.90625 8.09375 18.003906 17.988281 18.003906h24.722656l23.484375-22.292969zm0 0"
        fill="#fcc368"
      />
      <path
        d="m204.394531 336.480469h-148.574219c-10.625 0-12.261718 10.78125-9.976562 21.105469 1.152344 5.195312 2.648438 10.160156 4.425781 14.929687 10.484375 27.90625 31.460938 48.507813 57.960938 58.917969l34.308593 21.445312 45.8125-21.445312c26.191407-10.808594 46.855469-32.25 57.089844-58.917969 1.832032-4.796875 3.355469-9.792969 4.484375-14.929687 2.285157-10.324219.675781-21.105469-9.980469-21.105469zm0 0"
        fill="#f78411"
      />
      <path
        d="m188.351562 431.433594h-116.347656c-8.148437 0-14.773437 6.660156-14.773437 14.789062v15.433594c0 8.125 6.625 14.785156 14.773437 14.785156h157.398438c8.117187 0 14.773437-6.660156 14.773437-14.785156v-15.433594c0-.765625-.058593-1.554687-.199219-2.289062-1.097656-7.054688-7.246093-12.5-14.574218-12.5zm0 0"
        fill="#808080"
      />
      <path
        d="m239.945312 336.480469h-30.8125c10.625 0 12.261719 10.78125 9.976563 21.105469-1.15625 5.136718-2.648437 10.132812-4.507813 14.929687-1.945312 5.105469-4.285156 9.988281-6.964843 14.671875-4.820313 8.382812-10.742188 16.027344-17.589844 22.746094-.453125.421875-.902344.875-1.355469 1.296875-9.019531 8.519531-19.5625 15.40625-31.179687 20.203125h30.84375c5.527343-2.285156 10.796875-5.023438 15.789062-8.210938 18.632813-11.878906 33.207031-29.65625 41.300781-50.707031 1.832032-4.796875 3.355469-9.792969 4.480469-14.929687.425781-1.832032.707031-3.667969.820313-5.472657.617187-8.324219-2.035156-15.632812-10.800782-15.632812zm0 0"
        fill="#f74311"
      />
      <path
        d="m243.976562 443.9375c-1.097656-7.058594-7.246093-12.503906-14.574218-12.503906h-30.84375c7.359375 0 13.476562 5.445312 14.605468 12.503906.113282.730469.167969 1.523438.167969 2.285156v15.433594c0 8.128906-6.652343 14.785156-14.773437 14.785156h30.84375c8.117187 0 14.773437-6.660156 14.773437-14.785156v-15.433594c-.003906-.761718-.058593-1.554687-.199219-2.285156zm0 0"
        fill="#666"
      />
      <path
        d="m499.453125 153.035156c-4.003906-4.855468-10.035156-7.984375-16.773437-7.984375h-29.519532c11.953125 0 21.765625 9.816407 21.765625 21.78125v65.804688c0 11.992187-9.8125 21.785156-21.765625 21.785156h29.519532c6.738281 0 12.769531-3.105469 16.773437-7.957031 3.101563-3.78125 4.988281-8.578125 4.988281-13.828125v-65.804688c0-5.21875-1.886718-10.042969-4.988281-13.796875zm0 0"
        fill="#c2c7cc"
      />
      <path
        d="m362.355469 149.535156c-11.25-2.652344-22.527344-4.796875-33.832031-6.488281-3.972657 35.835937 31.574218 42.691406 33.832031 43.089844zm0 0"
        fill="#808080"
      />
      <path
        d="m213.160156 143.046875c-11.164062 1.691406-22.324218 3.835937-33.519531 6.488281v36.542969c4.878906-.960937 37.300781-8.804687 33.519531-43.03125zm0 0"
        fill="#808080"
      />
      <path
        d="m362.355469 149.535156c-6.933594-1.636718-13.898438-3.074218-20.863281-4.34375v31.460938c9.078124 7.222656 19.679687 9.257812 20.863281 9.480468zm0 0"
        fill="#666"
      />
    </g>
    <path d="m72.339844 274.179688c-2.988282 2.914062-3.050782 7.699218-.136719 10.6875 1.480469 1.519531 3.445313 2.28125 5.410156 2.28125 1.902344 0 3.808594-.710938 5.277344-2.144532 15.105469-14.722656 8.917969-26.839844 4.820313-34.859375-3.847657-7.523437-5.4375-10.640625 2.667968-18.269531 3.035156-2.859375 3.183594-7.644531.320313-10.679688-2.859375-3.042968-7.644531-3.183593-10.679688-.324218-16.371093 15.40625-9.992187 27.890625-5.769531 36.152344 3.691406 7.222656 5.21875 10.210937-1.910156 17.15625zm0 0" />
    <path d="m114.175781 233.660156c-2.988281 2.914063-3.050781 7.699219-.136719 10.6875 1.480469 1.519532 3.445313 2.28125 5.414063 2.28125 1.898437 0 3.804687-.710937 5.273437-2.144531 15.113282-14.730469 8.910157-26.847656 4.804688-34.863281-3.851562-7.523438-5.445312-10.640625 2.65625-18.265625 3.039062-2.859375 3.183594-7.644531.324219-10.679688-2.863281-3.042969-7.648438-3.183593-10.683594-.324219-16.371094 15.410157-9.980469 27.894532-5.75 36.15625 3.695313 7.21875 5.222656 10.207032-1.902344 17.152344zm0 0" />
    <path d="m225.222656 190.828125c1.957032 0 3.910156-.757813 5.390625-2.269531 2.460938-2.183594 13.464844-2.160156 15.894531.023437 2.945313 2.960938 7.730469 2.976563 10.6875.035157 2.960938-2.941407 2.976563-7.726563.035157-10.6875-5.464844-5.503907-14.804688-6.125-18.730469-6.125-.050781 0-.101562 0-.152344 0-3.773437.015624-13.128906.648437-18.523437 6.167968-2.917969 2.984375-2.875 7.78125.113281 10.699219 1.46875 1.4375 3.378906 2.15625 5.285156 2.15625zm0 0" />
    <path d="m286.429688 190.828125c1.957031 0 3.910156-.757813 5.386718-2.269531 2.460938-2.183594 13.46875-2.160156 15.898438.023437 2.941406 2.960938 7.726562 2.976563 10.6875.035157 2.960937-2.941407 2.976562-7.726563.035156-10.6875-5.46875-5.503907-14.804688-6.125-18.730469-6.125-.054687 0-.105469 0-.152343 0-3.773438.015624-13.128907.648437-18.523438 6.167968-2.917969 2.984375-2.875 7.78125.109375 10.695313 1.472656 1.441406 3.378906 2.160156 5.289063 2.160156zm0 0" />
    <path d="m269.886719 98.144531c4.171875 0 7.554687-3.382812 7.554687-7.558593v-34.707032c0-4.171875-3.382812-7.554687-7.554687-7.554687-4.175781 0-7.558594 3.382812-7.558594 7.554687v34.707032c0 4.175781 3.382813 7.558593 7.558594 7.558593zm0 0" />
    <path d="m218.574219 64.011719c-4.171875 0-7.554688 3.382812-7.554688 7.558593v34.679688c0 4.171875 3.382813 7.554688 7.554688 7.554688 4.175781 0 7.558593-3.382813 7.558593-7.554688v-34.679688c0-4.175781-3.382812-7.558593-7.558593-7.558593zm0 0" />
    <path d="m321.195312 113.804688c4.171876 0 7.554688-3.382813 7.554688-7.558594v-34.679688c0-4.171875-3.382812-7.554687-7.554688-7.554687-4.175781 0-7.558593 3.382812-7.558593 7.554687v34.679688c0 4.175781 3.382812 7.558594 7.558593 7.558594zm0 0" />
    <path d="m482.679688 261.980469c16.167968 0 29.320312-13.164063 29.320312-29.34375v-65.804688c0-16.175781-13.152344-29.339843-29.320312-29.339843h-32.082032c-16.167968 0-29.320312 13.164062-29.320312 29.339843v65.804688c0 16.179687 13.152344 29.34375 29.320312 29.34375h8.484375v105.828125h-6.257812c-2.164063 0-4.265625.273437-6.269531.785156l-7.210938-30.546875c-8.378906-35.519531-37.878906-54.726563-87.683594-57.085937-.035156-.003907-.070312-.003907-.105468-.003907-4.011719-.132812-7.4375-.855469-10.464844-2.292969-.117188-.054687-.230469-.117187-.351563-.167968-3.605469-1.789063-6.648437-4.632813-9.449219-8.746094 1.609376-1.238281 3.203126-2.503906 4.746094-3.824219 21.847656-18.652343 33.875-42.316406 33.875-66.640625v-48.652344c.113282-.746093.109375-1.484374 0-2.199218v-49.605469c14.152344-10.375 19.992188-25.207031 15.65625-40.367187-5.285156-18.480469-24.148437-31.386719-45.878906-31.386719h-21.316406c-6.574219-15.167969-20.871094-25.042969-39.273438-26.804688-22.3125-2.132812-44.027344 8.515625-55.496094 26.804688h-20.363281c-22.042969 0-41.183593 13.097656-46.546875 31.851562-4.285156 14.996094 1.449219 29.652344 15.394532 39.898438v87.15625.070312 17.15625c0 25.480469 15.523437 45.527344 28.546874 57.851563 3.121094 2.957031 6.425782 5.769531 9.855469 8.425781-2.859375 4.273437-5.96875 7.214844-9.679687 9.042969-.011719.007812-.019532.011718-.03125.015625-3.09375 1.519531-6.601563 2.277343-10.730469 2.414062-.035156 0-.070313.003907-.105469.003907-7.644531.363281-14.808594 1.125-21.492187 2.28125-.027344.003906-.054688.007812-.082031.015624-32.890626 5.707032-54.136719 21.011719-63.359376 45.667969h-79.464843c-14.085938 0-25.542969 11.476563-25.542969 25.585938 0 14.09375 11.457031 25.5625 25.542969 25.5625h19.640625c7.554687 17.566406 19.242187 32.527343 34.167968 43.804687h-7.347656c-12.3125 0-22.328125 10.023438-22.328125 22.34375v15.433594c0 12.320312 10.015625 22.34375 22.328125 22.34375h44.261719c4.171875 0 7.554687-3.382812 7.554687-7.554688 0-4.175781-3.382812-7.558593-7.554687-7.558593h-44.261719c-3.980468 0-7.214844-3.242188-7.214844-7.230469v-15.433594c0-3.988281 3.238282-7.230468 7.214844-7.230468h157.394532c3.472656 0 6.378906 2.46875 7.066406 5.75.023437.25.0625.496093.113281.742187.027344.242187.039063.488281.039063.738281v15.433594c0 3.988281-3.238282 7.230469-7.21875 7.230469h-78.710938c-4.171875 0-7.554688 3.382812-7.554688 7.558593 0 4.171876 3.382813 7.554688 7.554688 7.554688h78.710938c12.316406 0 22.332031-10.023438 22.332031-22.34375v-10.164062h175.804687c.632813 13.429687 11.730469 24.15625 25.285156 24.15625h13.816407c21.578125 0 39.132812-17.566407 39.132812-39.160157v-29.519531c0-19.003906-13.601562-34.886719-31.578125-38.417969v-106.570312zm-58.046876 79.539062 8.445313 35.792969c-3.480469 4.339844-5.570313 9.84375-5.570313 15.832031v43.234375h-21.492187l-12.355469-71.546875c-1.527344-9.109375-6.757812-15.972656-13.824218-18.824219v-45.941406c25.015624 6.40625 39.761718 20.101563 44.796874 41.453125zm-59.910156-44.273437v47.3125h-19.367187v-49.023438c1.785156.277344 3.660156.457032 5.640625.523438 4.816406.230468 9.382812.632812 13.726562 1.1875zm-70.941406 47.3125c-3.890625-9.179688-12.984375-15.632813-23.558594-15.632813h-58.273437v-23.03125c14.414062 10.519531 35.324219 15.21875 53.648437 15.921875 1.601563.0625 3.234375.09375 4.890625.09375 19.941407 0 43.519531-4.578125 59.753907-16.671875v39.320313zm-36.476562 14.660156c1.242187-5.621094 1.40625-10.773438.53125-15.183594h12.386718c5.765625 0 10.457032 4.699219 10.457032 10.476563 0 5.761719-4.691407 10.445312-10.457032 10.445312h-14.359375c.527344-1.894531 1.011719-3.804687 1.441407-5.738281zm97.492187-203.640625v20.367187c-7.589844-3.289062-17.351563-10.175781-18.8125-24.027343 6.28125 1.066406 12.554687 2.289062 18.8125 3.660156zm-149.105469-3.652344c-1.457031 13.542969-10.886718 20.445313-18.492187 23.839844v-20.203125c6.152343-1.363281 12.320312-2.574219 18.492187-3.636719zm-18.492187 51.28125v-11.332031c4.683593-1.527344 11.078125-4.234375 17.0625-8.855469 7.730469-5.960937 16.378906-16.414062 16.75-33.421875 11.382812-1.5 22.753906-2.492187 34.039062-2.953125 4.171875-.167969 7.414063-3.6875 7.246094-7.855469-.171875-4.171874-3.710937-7.398437-7.859375-7.246093-13.894531.566406-27.90625 1.902343-41.917969 3.980469-.0625.003906-.125.003906-.1875.011718-.269531.03125-.53125.074219-.792969.128906-8.121093 1.226563-16.242187 2.703126-24.34375 4.429688v-45.273438c0-2.609374-1.34375-5.035156-3.5625-6.414062-10.753906-6.699219-15.164062-15.691406-12.40625-25.328125 2.964844-10.378906 14.914063-20.890625 32.011719-20.890625h24.75c2.835938 0 5.433594-1.585938 6.726563-4.109375 9.066406-17.691406 28.09375-24.183594 42.941406-22.761719 14.125 1.351563 24.652344 9.359375 28.160156 21.425782.9375 3.226562 3.894532 5.445312 7.257813 5.445312h26.613281c17.523438 0 28.53125 10.59375 31.34375 20.433594 2.757812 9.652344-1.859375 19.050781-12.671875 25.785156-2.21875 1.378906-3.5625 3.804688-3.5625 6.414062v45.277344c-8.144531-1.710937-16.3125-3.164062-24.480469-4.386718-.3125-.074219-.632812-.140626-.960937-.175782-.101563-.011718-.203125-.011718-.304688-.019531-12.730469-1.863281-25.457031-3.144531-38.085937-3.796875-4.148438-.21875-7.722656 2.988281-7.9375 7.15625s2.992187 7.722656 7.160156 7.9375c10.109375.519531 20.289062 1.476562 30.484375 2.808594.363281 17.742187 9.6875 28.398437 18.015625 34.394531 5.765625 4.148437 11.734375 6.585937 16.109375 7.972656v7.296875c0 19.828125-10.148437 39.414063-28.574219 55.148438-16.375 13.976562-37.8125 23.289062-55.9375 24.300781-.441406.023437-.898437.039063-1.371094.039063-10.601562-.003907-27.695312-6.167969-43.796874-17.296876-.246094-.195312-.507813-.371093-.773438-.535156-4.589844-3.222656-9.085938-6.851562-13.320312-10.859375-10.867188-10.285156-23.824219-26.769531-23.824219-46.875zm81.71875 90.679688c.746093 0 1.484375-.023438 2.203125-.0625 15.480468-.863281 32.328125-6.488281 47.648437-15.582031 2.226563 3.273437 4.976563 6.535156 8.4375 9.355468-12.335937 14.292969-38.480469 19.980469-61.027343 19.117188-23.433594-.898438-43.140626-8.378906-51.734376-19.15625 3.492188-2.859375 6.253907-6.164063 8.492188-9.476563 15.910156 9.769531 32.875 15.804688 45.980469 15.804688zm-78.3125 2.175781c2.203125-.078125 4.273437-.296875 6.234375-.628906v33.492187h-19.367188v-31.757812c4.164063-.511719 8.535156-.886719 13.132813-1.105469zm-28.246094 3.851562v29.011719h-40.867187c7.304687-14.40625 20.824218-24.015625 40.867187-29.011719zm-136.816406 65.042969c-5.75 0-10.429688-4.683593-10.429688-10.445312 0-5.777344 4.679688-10.476563 10.429688-10.476563h12.394531c-.878906 4.410156-.714844 9.5625.527344 15.183594v.011719c.429687 1.933593.917968 3.839843 1.433594 5.726562zm84.148437 58.921875c-28.9375-11.847656-49.480468-36.527344-56.46875-67.921875-1.28125-5.785156-.679687-9.894531.417969-11.265625.160156-.195312.527344-.652344 2.179687-.652344h54.613282.027344.023437 129.460937c1.664063 0 2.035157.457032 2.191407.652344 1.09375 1.363282 1.6875 5.46875.410156 11.261719-6.75 30.492187-27.527344 55.78125-55.722656 67.925781zm139.75 12.5c-3.644531-7.398437-11.257812-12.5-20.039062-12.5h-13.035156c14.800781-11.410156 26.566406-26.480468 34.136718-43.808594h19.71875c12.335938 0 22.65625-8.769531 25.050782-20.402343h77.003906c5.042968 0 6.34375 6.878906 6.480468 7.699219l11.921876 69.011718zm241.214844-29.410156v29.519531c0 13.257813-10.773438 24.046875-24.019531 24.046875h-13.8125c-5.628907 0-10.207031-4.597656-10.207031-10.25v-57.140625c0-3.121093 1.40625-5.914062 3.613281-7.789062.070312-.054688.136719-.109375.203125-.167969 1.75-1.414062 3.972656-2.265625 6.386718-2.265625h13.816407c13.246093 0 24.019531 10.789063 24.019531 24.046875zm-54.269531-174.332031v-65.804688c0-7.84375 6.375-14.226562 14.210937-14.226562h32.082032c7.832031 0 14.207031 6.382812 14.207031 14.226562v65.804688c0 7.847656-6.375 14.230469-14.207031 14.230469h-32.082032c-7.835937 0-14.210937-6.382813-14.210937-14.230469zm0 0" />
  </svg>
)
