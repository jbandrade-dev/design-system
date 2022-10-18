export function AvatarGroup() {
  return (
    <div className="flex -space-x-4">
      <img
        className="avatarCircular"
        src="/avatar.jpg"
        alt=""
      />
      <img
        className="avatarCircular"
        src="/avatar.jpg"
        alt=""
      />
      <img
        className="avatarCircular"
        src="/avatar.jpg"
        alt=""
      />
      <a
        className="flex justify-center items-center w-12 h-12 text-xs font-medium text-white bg-gray-700 rounded-full border-white hover:bg-gray-600 dark:border-gray-800"
        href="#"
      >
        +99
      </a>
    </div>
  );
}
