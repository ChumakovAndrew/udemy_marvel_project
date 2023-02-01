const Spiner = (props) => {
    return(
        <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{
          margin: "auto",
          background: "rgba(255, 255, 255, 0)",
          display: "block",
          shapeRendering: "auto",
        }}
        width="200px"
        height="200px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        {...props}
      >
        <g transform="rotate(0 50 50)">
          <rect
            x={47}
            y={32.5}
            rx={2.79}
            ry={2.79}
            width={6}
            height={9}
            fill="#6492ac"
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.8571428571428571s"
              repeatCount="indefinite"
            />
          </rect>
        </g>
        <g transform="rotate(51.42857142857143 50 50)">
          <rect
            x={47}
            y={32.5}
            rx={2.79}
            ry={2.79}
            width={6}
            height={9}
            fill="#6492ac"
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.7142857142857143s"
              repeatCount="indefinite"
            />
          </rect>
        </g>
        <g transform="rotate(102.85714285714286 50 50)">
          <rect
            x={47}
            y={32.5}
            rx={2.79}
            ry={2.79}
            width={6}
            height={9}
            fill="#6492ac"
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.5714285714285714s"
              repeatCount="indefinite"
            />
          </rect>
        </g>
        <g transform="rotate(154.28571428571428 50 50)">
          <rect
            x={47}
            y={32.5}
            rx={2.79}
            ry={2.79}
            width={6}
            height={9}
            fill="#6492ac"
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.42857142857142855s"
              repeatCount="indefinite"
            />
          </rect>
        </g>
        <g transform="rotate(205.71428571428572 50 50)">
          <rect
            x={47}
            y={32.5}
            rx={2.79}
            ry={2.79}
            width={6}
            height={9}
            fill="#6492ac"
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.2857142857142857s"
              repeatCount="indefinite"
            />
          </rect>
        </g>
        <g transform="rotate(257.14285714285717 50 50)">
          <rect
            x={47}
            y={32.5}
            rx={2.79}
            ry={2.79}
            width={6}
            height={9}
            fill="#6492ac"
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.14285714285714285s"
              repeatCount="indefinite"
            />
          </rect>
        </g>
        <g transform="rotate(308.57142857142856 50 50)">
          <rect
            x={47}
            y={32.5}
            rx={2.79}
            ry={2.79}
            width={6}
            height={9}
            fill="#6492ac"
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="0s"
              repeatCount="indefinite"
            />
          </rect>
        </g>
      </svg>
    )}


export default Spiner