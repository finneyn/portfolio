import {ArrowTopRightOnSquareIcon} from '@heroicons/react/24/outline';
import {FC, memo} from 'react';

import {portfolioClients, SectionId} from '../../../data/data';
import Section from '../../Layout/Section';
import MediaSlider from './MediaSlider';

const Portfolio: FC = memo(() => {
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-12">
        <h2 className="self-center text-2xl font-bold text-white">Portfolio</h2>
        <div className="flex flex-col gap-y-16">
          {portfolioClients.map((client, index) => (
            <div key={`${client.name}-${index}`} className="flex flex-col gap-y-6">
              <div className="flex flex-col gap-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">{client.name}</h3>
                  {client.url && (
                    <a
                      className="flex items-center gap-x-2 text-orange-400 transition-colors hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      href={client.url}
                      rel="noopener noreferrer"
                      target="_blank">
                      <span className="text-sm font-medium">Visit Site</span>
                      <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                    </a>
                  )}
                </div>
                <p className="text-neutral-300">{client.description}</p>
              </div>
              <MediaSlider clientName={client.name} media={client.media} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;
