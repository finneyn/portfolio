import {XMarkIcon} from '@heroicons/react/24/outline';
import {Dialog, Transition} from '@headlessui/react';
import {FC, Fragment, memo} from 'react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
}

const VideoModal: FC<VideoModalProps> = memo(({isOpen, onClose, videoSrc}) => {
  return (
    <Transition appear as={Fragment} show={isOpen}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black/75" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95">
              <Dialog.Panel className="relative w-full max-w-4xl transform overflow-hidden rounded-2xl bg-neutral-900 text-left align-middle shadow-xl transition-all">
                <button
                  className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  onClick={onClose}>
                  <XMarkIcon className="h-6 w-6" />
                </button>
                <div className="relative aspect-video w-full">
                  <video
                    autoPlay
                    className="h-full w-full"
                    controls
                    src={videoSrc}
                    onEnded={onClose}>
                    Your browser does not support the video tag.
                  </video>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
});

VideoModal.displayName = 'VideoModal';
export default VideoModal;
