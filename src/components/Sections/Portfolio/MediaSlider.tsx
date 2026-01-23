import {ChevronLeftIcon, ChevronRightIcon, PlayIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo, useCallback, useState} from 'react';

import {PortfolioMedia} from '../../../data/dataDef';
import VideoModal from './VideoModal';

interface MediaSliderProps {
  media: PortfolioMedia[];
  clientName: string;
}

const MediaSlider: FC<MediaSliderProps> = memo(({media, clientName}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedVideoSrc, setSelectedVideoSrc] = useState<string>('');

  const goToPrevious = useCallback(() => {
    setCurrentIndex(prev => (prev === 0 ? media.length - 1 : prev - 1));
  }, [media.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex(prev => (prev === media.length - 1 ? 0 : prev + 1));
  }, [media.length]);

  const handleVideoClick = useCallback((videoSrc: string) => {
    setSelectedVideoSrc(videoSrc);
    setIsVideoModalOpen(true);
  }, []);

  const currentMedia = media[currentIndex];

  return (
    <>
      <div className="relative w-full">
        <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-neutral-700">
          {currentMedia.type === 'image' ? (
            <Image
              alt={currentMedia.alt || `${clientName} screenshot ${currentIndex + 1}`}
              className="h-full w-full object-cover"
              placeholder="blur"
              src={currentMedia.src}
            />
          ) : (
            <div className="relative h-full w-full">
              {currentMedia.thumbnail && typeof currentMedia.thumbnail !== 'string' ? (
                <Image
                  alt={currentMedia.alt || `${clientName} video thumbnail ${currentIndex + 1}`}
                  className="h-full w-full object-cover"
                  placeholder="blur"
                  src={currentMedia.thumbnail}
                />
              ) : (
                <div
                  className="h-full w-full bg-neutral-600"
                  style={{
                    backgroundImage:
                      typeof currentMedia.thumbnail === 'string' ? `url(${currentMedia.thumbnail})` : undefined,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
              )}
              <button
                className="absolute inset-0 flex items-center justify-center bg-black/30 transition-all hover:bg-black/40 focus:outline-none focus:ring-2 focus:ring-orange-500"
                onClick={() => handleVideoClick(typeof currentMedia.src === 'string' ? currentMedia.src : '')}
                type="button">
                <div className="rounded-full bg-orange-500 p-4 transition-transform hover:scale-110">
                  <PlayIcon className="h-12 w-12 text-white" />
                </div>
              </button>
            </div>
          )}
        </div>

        {media.length > 1 && (
          <>
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-all hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-orange-500"
              onClick={goToPrevious}
              type="button">
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-all hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-orange-500"
              onClick={goToNext}
              type="button">
              <ChevronRightIcon className="h-6 w-6" />
            </button>

            <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-2">
              {media.map((_, index) => (
                <button
                  className={classNames(
                    'h-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-orange-500',
                    index === currentIndex ? 'w-8 bg-orange-500' : 'w-2 bg-white/50 hover:bg-white/70',
                  )}
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  type="button"
                />
              ))}
            </div>
          </>
        )}
      </div>

      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} videoSrc={selectedVideoSrc} />
    </>
  );
});

MediaSlider.displayName = 'MediaSlider';
export default MediaSlider;
